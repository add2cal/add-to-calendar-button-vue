import { expect, test } from 'vitest';
import AddToCalendarButtonComponent from '@/components/AddToCalendarButtonComponent.vue';
import { render } from '@testing-library/vue';
import { defaultProps } from '@tests/mocks';

test('is imported and mounted', () => {
  expect(AddToCalendarButtonComponent).toBeTruthy();

  const component = render(AddToCalendarButtonComponent, {
    props: defaultProps,
  });

  expect(component).toBeTruthy();
  expect(component.container.querySelector('.atcb-initialized')).toBeTruthy();
});

test('is rerendered based on prop', async () => {
  const initialLabel = 'Initial Label';
  const changedLabel = 'Changed Label';

  const component = render(AddToCalendarButtonComponent, {
    props: {
      ...defaultProps,
      label: initialLabel,
    },
  });

  expect(component.getByText(initialLabel)).toBeTruthy();

  await component.rerender({
    label: changedLabel,
  });

  expect(component.getByText(changedLabel)).toBeTruthy();
});
