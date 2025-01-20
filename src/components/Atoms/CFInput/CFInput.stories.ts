import type { Meta, Story } from '@storybook/vue3';
import CFInput from '@/components/Atoms/CFInput/CFInput.vue';

export default {
  title: 'Atoms/CFInput',
  component: CFInput,
  argTypes: {
    id: {
      control: { type: 'text' }
    },
    label: {
      control: { type: 'text' }
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'number', 'email', 'password']
    },
    modelValue: {
      control: { type: 'text' }
    },
    placeholder: {
      control: { type: 'text' }
    },
    disabled: {
      control: { type: 'boolean' }
    },
    required: {
      control: { type: 'boolean' }
    },
    error: {
      control: { type: 'text' }
    }
  }
} as Meta<typeof CFInput>;

const Template: Story<typeof CFInput> = (args) => ({
  components: { CFInput },
  setup() {
    return { args };
  },
  template: '<CFInput v-bind="args" />'
});

export const Text = Template.bind({});
Text.args = {
  id: 'text-input-1',
  label: 'Text Input',
  modelValue: 'Sample text'
};

export const Number = Template.bind({});
Number.args = {
  id: 'number-input-1',
  label: 'Number Input',
  type: 'number',
  modelValue: 42
};

export const Email = Template.bind({});
Email.args = {
  id: 'email-input-1',
  label: 'Email Input',
  type: 'email',
  modelValue: 'example@email.com'
};

export const Password = Template.bind({});
Password.args = {
  id: 'password-input-1',
  label: 'Password Input',
  type: 'password',
  modelValue: 'password123'
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: 'disabled-input-1',
  label: 'Disabled Input',
  modelValue: 'Disabled value',
  disabled: true
};

export const WithError = Template.bind({});
WithError.args = {
  id: 'error-input-1',
  label: 'Input with Error',
  modelValue: 'Invalid input',
  error: 'Please enter a valid value'
};