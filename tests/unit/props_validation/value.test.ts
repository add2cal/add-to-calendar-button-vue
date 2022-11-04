import { expect, test, describe, vi } from 'vitest';
import AddToCalendarButtonComponent from '@/components/AddToCalendarButtonComponent.vue';
import { render } from '@testing-library/vue';
import { defaultProps, invalidOptionsPropValue } from '@tests/mocks';

describe('props value validation', () => {
  test('is rendered with proper-value properties', () => {
    const component = render(AddToCalendarButtonComponent, {
      props: defaultProps,
    });

    expect(component).toBeTruthy();
    expect(component.container.querySelector('.atcb-initialized')).toBeTruthy();
  });

  test('is not rendered with invalid `option` prop value', () => {
    const spy = vi.spyOn(global.console, 'error');

    const component = render(AddToCalendarButtonComponent, {
      props: {
        name: defaultProps.name,
        startDate: defaultProps.startDate,
        options: invalidOptionsPropValue,
      },
    });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(Array.isArray(spy.mock.lastCall) ? spy.mock.lastCall.join() : '').toContain(
      `invalid option [${invalidOptionsPropValue.join().toLowerCase()}]`
    );
    expect(component.container.querySelector('.atcb-initialized')).toBeFalsy();
  });

  test('is not rendered with endDate before startDate', () => {
    const spy = vi.spyOn(global.console, 'error');

    const component = render(AddToCalendarButtonComponent, {
      props: {
        ...defaultProps,
        startTime: '14:00',
        endDate: '2055-02-25',
        endTime: '13:00',
      },
    });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(Array.isArray(spy.mock.lastCall) ? spy.mock.lastCall.join() : '').toContain(
      'end date before start date'
    );
    expect(component.container.querySelector('.atcb-initialized')).toBeFalsy();
  });

  test('is rendered with proper `timeZone` prop value', () => {
    const component = render(AddToCalendarButtonComponent, {
      props: {
        ...defaultProps,
        startTime: '14:00',
        endDate: '2055-02-25',
        endTime: '15:00',
        timeZone: 'Europe/Paris',
      },
    });

    expect(component).toBeTruthy();
    expect(component.container.querySelector('.atcb-initialized')).toBeTruthy();
  });

  test('is not rendered with invalid timezone', () => {
    const spy = vi.spyOn(global.console, 'error');

    const component = render(AddToCalendarButtonComponent, {
      props: {
        ...defaultProps,
        startTime: '14:00',
        endDate: '2055-02-25',
        endTime: '15:00',
        timeZone: 'Europe/FantasyCity',
      },
    });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(Array.isArray(spy.mock.lastCall) ? spy.mock.lastCall.join() : '').toContain(
      'invalid time zone given'
    );
    expect(component.container.querySelector('.atcb-initialized')).toBeFalsy();
  });
});
