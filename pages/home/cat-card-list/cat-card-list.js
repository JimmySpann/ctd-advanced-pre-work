import { createComponent } from '../../../utils/element-maker.js';

const catCardListTemplateProps = [
    {
        imgSrc: "https://static.vecteezy.com/system/resources/thumbnails/050/393/628/small/cute-curious-gray-and-white-kitten-in-a-long-shot-photo.jpg",
        alt: "Cat 1",
        title: "Fluffy",
        description: "A playful kitten who loves to chase yarn."
    },
    {
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBEA2rPU99lt1Fg43YFICe_HxDgk0CRI1rMnNOGChg1Y7Av--9OtIK2KrN&s=10",
        alt: "Cat 2",
        title: "Whiskers",
        description: "A curious cat who enjoys exploring new places."
    },
    {
        imgSrc: "https://media.istockphoto.com/id/623368750/photo/sacred-birma-cat-in-interior.jpg?s=612x612&w=0&k=20&c=KfNi_sRwTCtXTnnUvEYVBnRg9arrA3JBC7SppRtSRzs=",
        alt: "Cat 3",
        title: "Mittens",
        description: "A gentle cat who loves to cuddle and be petted."
    }
];

const test = {

};

const catCardListOptions = {
    fileLocation: './pages/home/cat-card-list/cat-card-list.partial.html',
    customElementName: 'site-cat-card-list',
    templateProps: catCardListTemplateProps[0]
};

createComponent(catCardListOptions);
