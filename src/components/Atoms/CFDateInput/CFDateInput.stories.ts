import { Meta, Story } from '@storybook/vue3';
import CFDateInput from '@/components/Atoms/CFDateInput/CFDateInput.vue';

export default {
  title: 'Atoms/CFDateInput',
  component: CFDateInput,
  argTypes: {
    id: {
      control: { type: 'test' }
    },
    label: {
      control: { type: 'test' }
    },
    modelValue: {
      control: { type: 'date' }
    },
    placeholder: {
      control: { type: 'test' }
    },
    disabled: {
      control: { type: 'boolean' }
    },
    required: {
      control: { type: 'boolean' }
    },
    error: {
      control: { type: 'text' }
    },
    disabledDates: {
      control: { type: 'array' }
    }
  }
} as Meta<typeof CFDateInput>;

const Template: Story<typeof CFDateInput> = (args) => ({
  components: { CFDateInput },
  setup() {
    return { args };
  },
  template: '<CFDateInput v-bind="args" />'
});

export const Default = Template.bind({});
Default.args = {
  id: 'date-input-1',
  label: 'Event Date',
  modelValue: new Date(),
  placeholder: 'mm/dd/yyyy'
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'date-input-2',
  label: 'Event Date',
  modelValue: new Date(),
  placeholder: 'mm/dd/yyyy',
  disabled: true
};

export const WithError = Template.bind({});
WithError.args = {
  id: 'date-input-3',
  label: 'Event Date',
  modelValue: new Date(),
  placeholder: 'mm/dd/yyyy',
  error: 'Please enter a valid date'
};

export const WithDisabledDates = Template.bind({});
WithDisabledDates.args = {
  id: 'date-input-4',
  label: 'Event Date',
  modelValue: new Date(),
  placeholder: 'mm/dd/yyyy',
  disabledDates: [new Date(2023, 4, 1), new Date(2023, 4, 15)]
};