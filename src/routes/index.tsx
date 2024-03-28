import { component$ } from '@builder.io/qwik';


export default component$(() => {
  return (
    <div>
      Lamas Rule
      <button onClick$={() => {
        console.log('hello')
      }}>Hello</button>
    </div>
  );
});
