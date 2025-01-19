import { Meta, Story } from '@storybook/vue3';
import CFIcon from '@/components/Atoms/CFIcon/CFIcon.vue';

export default {
  title: 'Atoms/CFIcon',
  component: CFIcon,
  argTypes: {
    name: {
      control: { type: 'text' }
    }
  }
} as Meta<typeof CFIcon>;

const Template: Story<typeof CFIcon> = (args) => ({
  components: { CFIcon },
  setup() {
    return { args };
  },
  template: '<CFIcon v-bind="args" />'
});

export const Calendar = Template.bind({});
Calendar.args = {
  name: 'calendar'
};

export const Trash = Template.bind({});
Trash.args = {
  name: 'trash'
};