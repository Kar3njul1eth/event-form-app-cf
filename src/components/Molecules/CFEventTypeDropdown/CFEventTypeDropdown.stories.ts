import type { Meta, Story } from '@storybook/vue3';
import CFEventTypeDropdown from '@/components/Molecules/CFEventTypeDropdown/CFEventTypeDropdown.vue';

export default {
  title: 'Molecules/CFEventTypeDropdown',
  component: CFEventTypeDropdown,
  argTypes: {
    modelValue: {
      control: { type: 'text' }
    }
  }
} as Meta<typeof CFEventTypeDropdown>;

const Template: Story<typeof CFEventTypeDropdown> = (args) => ({
  components: { CFEventTypeDropdown },
  setup() {
    return { args };
  },
  template: '<CFEventTypeDropdown v-model="modelValue" />'
});

export const Default = Template.bind({});
Default.args = {
  modelValue: 'public'
};