import { Meta, Story } from '@storybook/vue3';
import CFButton from '@/components/Atoms/CFButton/CFButton.vue';

export default {
  title: 'Atoms/CFButton',
  component: CFButton,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger']
    },
    disabled: {
      control: { type: 'boolean' }
    }
  }
} as Meta<typeof CFButton>;

const Template: Story<typeof CFButton> = (args) => ({
  components: { CFButton },
  setup() {
    return { args };
  },
  template: '<CFButton v-bind="args">Button</CFButton>'
});

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary'
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger'
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
};