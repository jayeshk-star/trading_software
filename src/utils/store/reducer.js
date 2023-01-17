const fn = (state, action) => {
  switch (action.type) {
    case 'IS_LOGGED_IN':
      return {
        ...state,
        isLogin: action.isLogin,
        role: action.role,
        personId: action.personId
      };
    case 'ALERT_OPEN':
      return {
        ...state,
        alert: {
          isOpen: action.isOpen,
          severity: action.severity,
          label: action.label
        }
      };
    case 'ALERT_CLOSE':
      return {
        ...state,
        alert: {
          isOpen: action.isOpen,
          severity: state.alert.severity,
          label: state.alert.label
        }
      };
    case 'CORPORATE_ID':
      return {
        ...state,
        corporateId: action.corporateId
      };
    default:
      return state;
  }
};

export default fn;
