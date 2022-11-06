import { expect, test, describe, vi } from 'vitest';
import AddToCalendarButtonComponent from '@/components/AddToCalendarButtonComponent.vue';
import { render } from '@testing-library/vue';
import { defaultProps } from '@tests/mocks';

describe('props type validation', () => {
  test('is rendered with proper-type properties', () => {
    const component = render(AddToCalendarButtonComponent, {
      props: {
        ...defaultProps,
        sequence: 1,
      },
    });

    expect(component).toBeTruthy();
    expect(component.container.querySelector('.atcb-initialized')).toBeTruthy();
  });

  test('is not rendered with wrong types `options` prop', () => {
    const spy = vi.spyOn(global.console, 'error');

    const component = render(AddToCalendarButtonComponent, {
      props: {
        name: defaultProps.name,
        startDate: defaultProps.startDate,
        options: "['Google', 'iCal']",
      },
    });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(Array.isArray(spy.mock.lastCall) ? spy.mock.lastCall.join() : '').toContain('invalid option [[]');
    expect(component.container.querySelector('.atcb-initialized')).toBeFalsy();
  });

  test('is not rendered with wrong types `sequence` prop', () => {
    const spy = vi.spyOn(global.console, 'log');

    const component = render(AddToCalendarButtonComponent, {
      props: {
        ...defaultProps,
        sequence: 'text',
      },
    });

    expect(spy).toHaveBeenCalled();
    expect(Array.isArray(spy.mock.calls[0]) ? spy.mock.calls[0].join() : '').toContain(
      'sequence needs to be a number. Used the default 0 instead'
    );
    expect(component.container.querySelector('.atcb-initialized')).toBeTruthy();
  });
});
