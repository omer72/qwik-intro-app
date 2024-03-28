import type { Signal} from "@builder.io/qwik";
import { createContextId } from "@builder.io/qwik";

export interface ProjectorContextSignal{
    typeValue:Signal<string>;
    colorSignal:Signal<string>;
}

export const projectorContextId = createContextId<ProjectorContextSignal>('ProjectorContext');