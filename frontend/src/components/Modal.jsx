import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Modal({ open, onClose, children, title }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
          <motion.div
            initial={{ opacity: 0, scale: .98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: .98, y: 10 }}
            className="card w-full max-w-xl mx-auto p-6 mt-24 relative">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold">{title}</h3>
              <button onClick={onClose} className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">✕</button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
