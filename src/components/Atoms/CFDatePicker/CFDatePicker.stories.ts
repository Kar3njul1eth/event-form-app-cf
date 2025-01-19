import { Meta, Story } from '@storybook/vue3';
import CFDatePicker from '@/components/Atoms/CFDatePicker/CFDatePicker.vue';

export default {
  title: 'Atoms/CFDatePicker',
  component: CFDatePicker,
  argTypes: {
    modelValue: {
      control: { type: 'date' }
    },
    disabledDates: {
      control: { type: 'array' }
    }
  }
} as Meta<typeof CFDatePicker>;

const Template: Story<typeof CFDatePicker> = (args) => ({
  components: { CFDatePicker },
  setup() {
    return { args };
  },
  template: '<CFDatePicker v-bind="args" />'
});

export const Default = Template.bind({});
Default.args = {
  modelValue: new Date(),
  disabledDates: []
};

export const WithDisabledDates = Template.bind({});
WithDisabledDates.args = {
  modelValue: new Date(),
  disabledDates: [new Date(2023, 4, 1), new Date(2023, 4, 15)]
};