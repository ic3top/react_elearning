export const selectStyles = {
  control: (styles) => ({
    ...styles,
    background: 'rgba(50, 50, 50, 0.948044)',
    padding: '0 18px',
    marginTop: '13px',
    minHeight: '57px',
    border: 'none',
    boxShadow: 'none!important',
    boxSizing: 'border-box',

    fontSize: '20px',
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    ':hover': {
      color: 'var(--main-red)',
    }
  }),
  clearIndicator: (styles) => ({
    ...styles,
    ':hover': {
      color: 'var(--main-red)',
    }
  }),
};
