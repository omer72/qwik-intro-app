import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
  <>
    <Mishko/>
    <div>
      This is Page 3
    </div>
  </>
  )
});

export const Mishko = component$(() => {
  return <div>Test</div>
})