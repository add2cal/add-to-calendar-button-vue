import { expect, test, describe, vi } from 'vitest';
import AddToCalendarButtonComponent from '@/components/AddToCalendarButtonComponent.vue';
import { render } from '@testing-library/vue';
import { defaultProps } from '@tests/mocks';

describe('required props validation', () => {
  test('is rendered with required `startDate` prop passed', () => {
    const component = render(AddToCalendarButtonComponent, {
      props: defaultProps,
    });

    expect(component).toBeTruthy();
    expect(component.container.querySelector('.atcb-initialized')).toBeTruthy();
  });

  test('is rendered with required `dates` prop passed', () => {
    const component = render(AddToCalendarButtonComponent, {
      props: {
        name: defaultProps.name,
        dates: [{ name: 'Sub-Event', startDate: '2055-02-25' }],
        options: defaultProps.options,
      },
    });

    expect(component).toBeTruthy();
    expect(component.container.querySelector('.atcb-initialized')).toBeTruthy();
  });

  test('is not rendered withouth required props passed', () => {
    const spy = vi.spyOn(global.console, 'error');

    const component = render(AddToCalendarButtonComponent, {
      props: {
        name: defaultProps.name,
        options: defaultProps.options,
      },
    });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(Array.isArray(spy.mock.lastCall) ? spy.mock.lastCall.join() : '').toContain(
      'required setting missing'
    );
    expect(component.container.querySelector('.atcb-initialized')).toBeFalsy();
  });
});
