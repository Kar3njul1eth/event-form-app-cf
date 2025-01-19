<template>
  <div class="cf-date-picker">
    <div class="cf-date-picker-header">
      <button class="cf-date-picker-nav-btn" @click="prevMonth">
        <CFIcon name="arrow-left" />
      </button>
      <div class="cf-date-picker-month-year">
        {{ currentMonthYear }}
      </div>
      <button class="cf-date-picker-nav-btn" @click="nextMonth">
        <CFIcon name="arrow-right" />
      </button>
    </div>
    <div class="cf-date-picker-weekdays">
      <div class="cf-date-picker-weekday" v-for="day in weekdays" :key="day">
        {{ day }}
      </div>
    </div>
    <div class="cf-date-picker-days">
      <div
        v-for="day in days"
        :key="day.date.getTime()"
        :class="[
          'cf-date-picker-day',
          { 'selected': isSameDay(day.date, modelValue), 'disabled': isDateDisabled(day.date) }
        ]"
        @click="selectDate(day.date)"
      >
        {{ day.date.getDate() }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, PropType } from 'vue';
import CFIcon from '@/components/Atoms/CFIcon/CFIcon.vue';

interface DatePickerDay {
  date: Date;
  isCurrentMonth: boolean;
}

const props = defineProps({
  modelValue: {
    type: Date,
    required: true
  },
  disabledDates: {
    type: Array as PropType<Date[]>,
    default: () => []
  }
});

const emit = defineEmits(['update:modelValue']);

const currentDate = ref(new Date());
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const currentMonthYear = computed(() => {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  return `${monthNames[currentDate.value.getMonth()]} ${currentDate.value.getFullYear()}`;
});

const days = computed(() => {
  const firstDay = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth(), 1);
  const daysInMonth = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 0).getDate();
  const result: DatePickerDay[] = [];

  for (let i = 0; i < firstDay.getDay(); i++) {
    result.push({ date: new Date(firstDay.getTime() - (firstDay.getDay() - i) * 86400000), isCurrentMonth: false });
  }

  for (let i = 1; i <= daysInMonth; i++) {
    result.push({ date: new Date(currentDate.value.getFullYear(), currentDate.value.getMonth(), i), isCurrentMonth: true });
  }

  const remainingDays = 42 - result.length;
  for (let i = 1; i <= remainingDays; i++) {
    result.push({ date: new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, i), isCurrentMonth: false });
  }

  return result;
});

const prevMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 1);
};

const nextMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1);
};

const isDateDisabled = (date: Date) => {
  return props.disabledDates.some(d => isSameDay(d, date));
};

const isSameDay = (date1: Date, date2: Date) => {
  return date1.getFullYear() === date2.getFullYear() &&
         date1.getMonth() === date2.getMonth() &&
         date1.getDate() === date2.getDate();
};

const selectDate = (date: Date) => {
  if (!isDateDisabled(date)) {
    emit('update:modelValue', date);
  }
};
</script>

<style src="./CFDatePicker.scss" lang="scss" scoped></style>