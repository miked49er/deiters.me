import '@testing-library/jest-dom/vitest'

// jsdom doesn't implement scrollTo; stub it so ScrollToTop doesn't log "Not implemented".
window.scrollTo = () => {}
