import { ReactElement, useState } from "react"


const useMultiStepForm = (steps:ReactElement[]) => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0)

    const next = () => {
        setCurrentStepIndex((currentIndex) => {
            if(currentIndex >= steps.length) {
                return currentIndex
            }
            return currentIndex + 1
        })
    }

    const back = () => {
        setCurrentStepIndex((currentIndex) => {
            if(currentIndex <= 0) {
                return currentIndex
            }
            return currentIndex - 1
        })
    }

    const goto = (index:number) => {
        setCurrentStepIndex(index)
    }
  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    goto,
    next,
    back
  }
}

export default useMultiStepForm