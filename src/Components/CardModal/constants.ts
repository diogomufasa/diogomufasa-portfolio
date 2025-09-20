// styles
export const styles = {
  backdrop:
    'fixed inset-0 z-50 flex items-center justify-center bg-black/60',

  modal:
    'flex flex-col w-[min(90vw,800px)] max-h-[85vh] overflow-hidden rounded-md ' +
    'bg-white text-slate-900 dark:bg-neutral-900 dark:text-white ' +
    'card-shadow',

  header:
    'flex items-center justify-between px-5 py-4 border-b border-color',

  title: 'm-0 text-base font-semibold',

  closeBtn:
    'inline-flex items-center justify-center p-2 rounded-md text-current ' +
    'hover:bg-black/5 dark:hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-500',

  body: 'p-5 overflow-y-auto grid gap-4',

  imageWrap: 'relative w-full h-72 rounded-md overflow-hidden',

  tag: 'opacity-80 m-0 text-xs tracking-wide',

  description: 'mt-2 leading-relaxed',

  footer: 'flex gap-3 px-5 pt-3 pb-5',

  actionBtn:
    'inline-flex items-center gap-2 px-3 py-2 rounded-md ' +
    'transition duration-300 ease-in-out p-2 bg-slate-900 text-white hover:bg-green-700 dark:bg-zinc-800'
};