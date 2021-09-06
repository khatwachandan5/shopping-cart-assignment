import Image from "next/image";
import Link from "next/link";
import {
  CategoryLists,
  CategoryDetails,
  CategoryItemImage,
  CategoryItemName,
} from "./CategoryStyle";
import Loading from "../Loading";
import Carousels from './Carousel';

export default function Category({ categories }) {
  const categoryList = categories;

  return (
    <>
    <Carousels />
      <CategoryLists>
        {categoryList.length > 0 ? (
          categoryList
            .filter((category) => category.enabled === true)
            .map((category, index) => {
              return (
                category.enabled && (
                  <div
                    className={index % 2 === 0 ? "leftAlign" : "rightAlign"}
                    key={index}
                  >
                    <CategoryItemImage>
                      <Image
                        src={category.imageUrl}
                        alt={category.name}
                        width={80}
                        height={40}
                      />
                    </CategoryItemImage>
                    <CategoryDetails>
                      <CategoryItemName>
                        <strong>{category.name}</strong>
                      </CategoryItemName>
                      <p>{category.description}</p>
                      <Link
                        href={`/products/${category.id}`}
                        title={category.name}
                      >
                        <button className="categorExplore">
                          {`Explore ${category.name}`}
                        </button>
                      </Link>
                    </CategoryDetails>
                  </div>
                )
              );
            })
        ) : (
          <Loading />
        )}
      </CategoryLists>
    </>
  );
}
