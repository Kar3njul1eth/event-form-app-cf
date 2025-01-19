import { Meta, Story } from '@storybook/vue3';
import CFCheckbox from '@/components/Atoms/CFCheckbox/CFCheckbox.vue';

export default {
  title: 'Atoms/CFCheckbox',
  component: CFCheckbox,
  argTypes: {
    id: {
      control: { type: 'text' }
    },
    modelValue: {
      control: { type: 'boolean' }
    }
  }
} as Meta<typeof CFCheckbox>;

const Template: Story<typeof CFCheckbox> = (args) => ({
  components: { CFCheckbox },
  setup() {
    return { args };
  },
  template: '<CFCheckbox v-bind="args">Checkbox Label</CFCheckbox>'
});

export const Unchecked = Template.bind({});
Unchecked.args = {
  id: 'checkbox-1',
  modelValue: false
};

export const Checked = Template.bind({});
Checked.args = {
  id: 'checkbox-2',
  modelValue: true
};