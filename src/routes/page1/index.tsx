import { component$, useContextProvider, useSignal, useTask$ } from '@builder.io/qwik';
import { Projector } from './projector';
import { projectorContextId } from '../projector-ocntext-id';

export default component$(() => {

  const typeValue = useSignal('');
  const colorSignal = useSignal('black');

  useContextProvider(projectorContextId, typeValue);

  useTask$(({track}) => {
    track(() => typeValue.value);

    if (typeValue.value.indexOf('lamma') !== -1){
      colorSignal.value = 'red'
    } else {
      colorSignal.value = 'black'
    }
  })

  return <div>
    This is Page 1

    <hr />
    
    <input type="text" placeholder="Type your search" onInput$={(e)=> typeValue.value = (e.target as HTMLInputElement).value}/>
    
    <hr />
    <Projector colorSignal={colorSignal}>You typed:</Projector>
    
  </div>
});

