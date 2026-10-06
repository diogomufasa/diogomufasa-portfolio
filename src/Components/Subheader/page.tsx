import React from 'react';

const Subheader = ({ title, icon } : { title: string, icon: any}) => {
    return (
        <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--accent)] bg-opacity-10 text-[var(--accent)] text-xl border border-[var(--accent)] border-opacity-20">
              { icon }
            </div>
            <h2 className="text-2xl font-bold tracking-tight m-0">{ title }</h2>
        </div>
    )
}

export default Subheader;