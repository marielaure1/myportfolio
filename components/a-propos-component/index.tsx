import { FC } from 'react';

const APropos: FC = () => {
    return (
        <>
           <h3 className="title-section-home-mobile">A propos</h3>
            <h2 className="lg:text-4xl sm:text-2xl font-bold uppercase mb-[20px]">Développeuse web</h2>
            <p className="lg:text-xl sm:text-1xl text-base max-w-[700px] mb-[20px]">Lorem ipsum dolor sit amet consectetur. Lectus nulla sagittis sed vestibulum et eget suspendisse pellentesque. Vulputate quam sit habitant molestie sem tempus velit elit arcu. Velit purus est adipiscing accumsan mauris nulla sollicitudin ac nunc.</p>
            <p className="lg:text-xl sm:text-1xl text-base max-w-[700px] mb-[20px]">Felis dignissim tortor justo convallis tincidunt amet tincidunt risus non. Purus mi phasellus lobortis ornare. Odio sem fermentum vel risus nec sed. Hac massa diam tempus aenean donec nibh.</p>

            <div className="italic mt-[5vw] font-times flex sm:flex-row flex-col">
                <strong className="mr-[30px] lg:text-1xl text-sm">HTML - CSS - SASS</strong>
                <strong className="mr-[30px] lg:text-1xl text-sm">Javascript - JQuery</strong>
                <strong className="lg:text-1xl text-sm">PHP - Laravel - MySQL</strong>
            </div>
        </>
    )
}

export default APropos;