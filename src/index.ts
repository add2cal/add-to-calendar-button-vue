import { defineAsyncComponent } from 'vue'

const AddToCalendarButtonComponentAsync = defineAsyncComponent(() =>
  import('@/components/AddToCalendarButtonComponent.vue')
);

export default AddToCalendarButtonComponentAsync