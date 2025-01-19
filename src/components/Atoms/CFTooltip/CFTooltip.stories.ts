import { Meta, Story } from '@storybook/vue3';
import CFTooltip from '@/components/Atoms/CFTooltip/CFTooltip.vue';

export default {
  title: 'Atoms/CFTooltip',
  component: CFTooltip
} as Meta<typeof CFTooltip>;

const Template: Story<typeof CFTooltip> = (args) => ({
  components: { CFTooltip },
  setup() {
    return { args };
  },
  template: `
    <div style="position: relative;">
      <CFTooltip>
        This is a tooltip
      </CFTooltip>
    </div>
  `
});

export const Default = Template.bind({});