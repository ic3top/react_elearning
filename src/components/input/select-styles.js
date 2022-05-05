export const selectStyles = (isError) => ({
    control: (styles) => ({
    ...styles,
                                           background: 'rgba(50, 50, 50, 0.948044)',
                                           padding: '0 18px',
                                           marginTop: '13px',
                                           minHeight: '57px',
                                           border: 'none',
                                           borderRadius: '0',
                                           boxShadow: 'none!important',
                                           boxSizing: 'border-box',

                                           fontSize: '20px',
                                           borderBottom: '1px solid transparent',
                                           borderBottomColor: isError ? '#F93244FF!important' : 'transparent!important',
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
});
