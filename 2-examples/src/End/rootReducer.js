import { combineReducers } from 'redux';

const defaultState = {
  suppliers: [],
  selectedSupplier: null,
  loading: false,
  error: null,
};

const supplierReducer = (state = defaultState, action) => {
  switch (action.type) {
    // --------------------------------------------------------------------------------------------
    // GET Suppliers
    // --------------------------------------------------------------------------------------------
    case 'GET_PENDING':
      return { ...state, loading: true };
    case 'GET_SUCCESS':
      return {
        ...state,
        suppliers: action.suppliers,
        loading: false,
        error: null,
      };
    case 'GET_ERROR':
      return { ...state, error: action.error, loading: false };
    // --------------------------------------------------------------------------------------------
    // CREATE Supplier
    // --------------------------------------------------------------------------------------------
    case 'CREATE_PENDING':
      return { ...state, loading: true };
    case 'CREATE_SUCCESS':
      return {
        ...state,
        suppliers: [...state.suppliers, action.newSupplier],
        loading: false,
        error: null,
      };
    case 'CREATE_ERROR':
      return { ...state, error: action.error, loading: false };
    // --------------------------------------------------------------------------------------------
    // DELETE Supplier
    // --------------------------------------------------------------------------------------------
    case 'DELETE_PENDING':
      return { ...state, loading: true };
    case 'DELETE_SUCCESS':
      const suppliersAfterDeleted = state.suppliers.filter((element) => {
        return element.id !== action.id;
      });
      
      return {
        ...state,
        suppliers: suppliersAfterDeleted,
        loading: false,
        error: null,
      };
    case 'DELETE_ERROR':
      return { ...state, error: action.error, loading: false };
    // --------------------------------------------------------------------------------------------
    // DEFAULT
    default:
      return state;
  }
};

// COMBINE MANY REDUCERS
const rootReducer = combineReducers({
  supplierReducer,
});

export default rootReducer;
