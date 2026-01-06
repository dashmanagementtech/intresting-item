import type {Ref} from 'vue';
import { onBeforeUnmount, onMounted  } from 'vue';

/**
 * @param elRef - The template ref of the element to watch
 * @param callback - Function to run when a click occurs outside
 */
export function useClickOutside(elRef: Ref<HTMLElement | null>, callback: () => void) {
  if (!elRef) return;

  const listener = (event: MouseEvent) => {
    // Do nothing if the click was inside the element or its children
    if (elRef.value && !elRef.value.contains(event.target as Node)) {
      callback();
    }
  };

  onMounted(() => {
    document.addEventListener('mousedown', listener);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('mousedown', listener);
  });
}