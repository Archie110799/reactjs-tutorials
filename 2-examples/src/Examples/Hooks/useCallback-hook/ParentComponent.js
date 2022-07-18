import React, {useCallback} from 'react';
import Count from '../components/Count';
import Button from '../components/Button';

export default function ParentComponent() {
  const [age, setAge] = React.useState(0);
  const [salary, setSalary] = React.useState(1000);

  //là được sử dụng để tối ưu quá trình render của React functional components. 
  //Nó sẽ rất hữu ích đối với trường hợp một thành phần (component) 
  //liên tục được hiển thị lại không cần thiết trong quá trình xử lý sự kiện 
  //người dùng và có hành vi chức năng phức tạp.

  const increaseAge = React.useCallback(() => {
    // setAge(age + 1);
    setAge((a) => a + 1);
  }, []);

  // const increaseAge = () => {
  //   setAge((a) => a + 1);
  // };

  // const increaseSalary = () => {
  //   setSalary((s) => s + 100);
  // };

  const increaseSalary = React.useCallback(() => {
    setSalary((s) => s + 100);
  }, []);

  // Tránh việc re-render cho những component render nặng
  // kĩ thuật memoization
  // Nó sẽ tạo ra function này đúng 1 lần đầu, 
  // những lần re-render khác nó chỉ trả về 1 function cũ
  // do empty dependences
  // trả về 1 func

  // Tổ chức tốt component, không cần add all callBack cho full app,
  // dùng khi render chart, animation -> tốn resource tài nguyên khi render

  return (
    <div>
      <h2>useCallback hooks</h2>
      <hr />
      <Count text='Age' count={age} />
      <Button onClick={increaseAge}>Increase Age</Button>

      <Count text='Salary' count={salary} />
      <Button onClick={increaseSalary}>Increase Salary</Button>
    </div>
  );
}
