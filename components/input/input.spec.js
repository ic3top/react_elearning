import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Input } from './Input';

describe('Input', () => {
  const mockedOptions = [
    { label: 'Mocked option 1', value: 'mocked-option-1' },
  ];
  const setFieldValueSpy = jest.fn();
  const fieldName = 'fieldName';
  const props = {
    id: 'id',
    label: 'label',
    className: 'className',
    containerClasses: 'containerClasses',
    form: { setFieldValue: setFieldValueSpy },
    field: { value: [], name: fieldName },
  };

  it('should render text input', () => {
    const { container } = render(<Input {...props} type="text" label="movie poster url" />);

    expect(container.querySelector('input')).toBeTruthy();
  });
  it('should render textarea', () => {
    const { container } = render(<Input {...props} type="textarea" label="overview" />);

    expect(container.querySelector('textarea')).toBeTruthy();
  });
  it('should render date picker', () => {
    const { container } = render(<Input {...props} type="date" />);

    expect(container.querySelector('.input_datepicker')).toBeTruthy();
  });
  it('should render select', () => {
    render(<Input {...props} type="select" />);

    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).not.toBeNull();
  });

  it('should call setFieldValue on input change', () => {
    render(<Input {...props} type="text" />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: '123' } });

    expect(setFieldValueSpy).toHaveBeenNthCalledWith(1, fieldName, '123');
  });
  it('should call setFieldValue on textarea change', () => {
    render(<Input {...props} type="textarea" />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: '123' } });

    expect(setFieldValueSpy).toHaveBeenNthCalledWith(1, fieldName, '123');
  });
  it('should call setFieldValue on select change', async () => {
    const { container } = render(<Input {...props} type="select" options={mockedOptions} isMulti />);

    fireEvent.focus(container.querySelector('input'));
    fireEvent.keyDown(container.querySelector('input'), { key: 'ArrowDown', code: 40 });

    const option = await screen.findByText(mockedOptions[0].label);
    fireEvent.click(option);

    expect(setFieldValueSpy).toHaveBeenNthCalledWith(1, fieldName, [mockedOptions[0].value]);
  });
  it('shoud call setFieldValue on datepicker change', async () => {
    render(<Input {...props} type="date" />);

    fireEvent.click(screen.getByRole('textbox'));

    const option = await screen.findByRole('option', { name: /choose sunday, may 8th, 2022/i });
    fireEvent.click(option);

    expect(setFieldValueSpy).toHaveBeenNthCalledWith(1, fieldName, 'Sun May 08 2022');
  });
});
