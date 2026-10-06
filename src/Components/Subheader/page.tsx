import React from 'react';

const Subheader = ({ title, icon } : { title: string, icon: any}) => {
    return (
        <div className="flex items-center gap-3 mb-8">
            <div 
              className="flex items-center justify-center w-10 h-10 rounded-xl text-[var(--accent)] text-xl border"
              style={{ 
                backgroundColor: 'color-mix(in srgb, var(--accent) 15%, transparent)',
                borderColor: 'color-mix(in srgb, var(--accent) 30%, transparent)'
              }}
            >
              { icon }
            </div>
            <h2 className="text-2xl font-bold tracking-tight m-0 text-[var(--text)]">{ title }</h2>
        </div>
    )
}

export default Subheader;