import Image from "next/image"
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

type SideProgressBarProps = {
  currentStep: 1 | 2 | 3
}

const SideProgressBar = ({ currentStep }: SideProgressBarProps) => {
  const steps = [
    { title: "Upload Document", description: "Select and upload your document" },
    { title: "Add Workflow", description: "Set priority and workflow" },
    { title: "Review Details", description: "Review and submit" }
  ];

  return (
    <div className={`col-span-2 px-11 py-10 border-r-[.5px] border-r-gray flex flex-col space-y-[87px] ${poppins.className} bg-primary-lighter min-h-screen`}>
      <h2 className="h-[26px] flex items-center space-x-2">
        <Image src="/logo/c-logo.png" alt="Logo" width={27} height={26} />
        <Image src="/logo/CmAG.png" alt="Logo" width={45} height={20} />
      </h2>
      <ul className="flex flex-col">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = currentStep === stepNumber;
          const isCompleted = currentStep > stepNumber;
          const hasNextStep = index < steps.length - 1;

          return (
            <li key={stepNumber} className="flex space-x-3">
              <div>
                <div 
                  className={`w-[16px] h-[16px] rounded-full ${
                    isActive || isCompleted ? 'bg-primary' : 'bg-gray'
                  }`}
                ></div>
                {hasNextStep && (
                  <div 
                    className={`w-[3px] h-12 mx-auto ${
                      isCompleted ? 'bg-primary' : 'bg-gray'
                    }`}
                  ></div>
                )}
              </div>
              <div className="flex flex-col">
                <span 
                  className={`text-[14px] ${
                    isActive || isCompleted ? 'text-primary' : 'text-gray'
                  }`}
                >
                  {step.title}
                </span>
                <span 
                  className={`text-[12px] ${
                    isActive || isCompleted ? 'text-primary opacity-70' : 'text-gray'
                  }`}
                >
                  {step.description}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default SideProgressBar