import type { Meta, Story } from '@storybook/vue3';
import CFDropdown from '@/components/Atoms/CFDropdown/CFDropdown.vue';

export default {
  title: 'Atoms/CFDropdown',
  component: CFDropdown,
  argTypes: {
    options: {
      control: { type: 'array' }
    },
    modelValue: {
      control: { type: 'text' }
    },
    placeholder: {
      control: { type: 'text' }
    }
  }
} as Meta<typeof CFDropdown>;

const Template: Story<typeof CFDropdown> = (args) => ({
  components: { CFDropdown },
  setup() {
    return { args };
  },
  template: '<CFDropdown v-bind="args" />'
});

export const Default = Template.bind({});
Default.args = {
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ],
  modelValue: 'option1',
  placeholder: 'Select an option'
};