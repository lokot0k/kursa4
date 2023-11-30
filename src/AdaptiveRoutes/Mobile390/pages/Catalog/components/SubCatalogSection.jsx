import Category from "./Category";

export default function SubCatalogSection({subcategories}) {
    return(
        <>
            {subcategories?.map(item =>
                <Category subcategory={item} key={item.id}></Category>
            )}
        </>
    );
}
