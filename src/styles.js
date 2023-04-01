

const styles ={
    flexCenter : 'flex items-center justify-center',
    flexStart : 'flex items-start justify-center',
    boxwidth : 'xl:max-w-[1280px] w-full',
    heading2 : 'font-raleway font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full ',
    paragraph: "font-raleway font-normal text-dimWhite text-[18px] leading-[30.8px]",

    paddingX : 'sm:px-16 px-6',
    paddingY : 'sm:py-16 py-6',
    padding : 'sm:px-16 px-6 sm:py-16 py-6',

    marginX :'sm:mx-16 mx-6 ',
    marginY :'sm:my-16 my-6 ',
    tras : 'transition-all duration-300 ease-in '
}


export const layout = {
    section :  `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse :  `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
    
    sectionImgReverse :  `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative  `,
    sectionImg  :  `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative  `,
    sectionInfo  : `flex-1 ${styles.flexStart} flex-col`

}   
export default styles;