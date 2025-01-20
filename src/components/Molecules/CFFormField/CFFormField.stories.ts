import type { Meta, Story } from '@storybook/vue3';
import CFFormField from '@/components/Molecules/CFFormField/CFFormField.vue';
import CFInput from '@/components/Atoms/CFInput/CFInput.vue';

export default {
  title: 'Molecules/CFFormField',
  component: CFFormField,
  argTypes: {
    id: {
      control: { type: 'text' }
    },
    label: {
      control: { type: 'text' }
    },
    error: {
      control: { type: 'text' }
    }
  }
} as Meta<typeof CFFormField>;

const Template: Story<typeof CFFormField> = (args) => ({
  components: { CFFormField, CFInput },
  setup() {
    return { args };
  },
  template: `
    <CFFormField v-bind="args">
      <CFInput id="form-field-input" />
    </CFFormField>
  `
});

export const Default = Template.bind({});
Default.args = {
  id: 'form-field-1',
  label: 'Form Field'
};

export const WithError = Template.bind({});
WithError.args = {
  id: 'form-field-2',
  label: 'Form Field',
  error: 'Please enter a valid value'
};