import Category from "../Components/Category"
import LatestPosters from "../Components/Home/LatestPosters"
import Layout from "../Layout/Layout"
import Categories from "../enums/Categories"

function HomeScreen() {
    const categories = Categories();

    return (
        <Layout>
            <div className="container flex-rows mx-auto min-h-screen py-10 text-text">
                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    <div className="flex md:justify-center md:col-span-2 md:row-span-2">
                        <LatestPosters />
                    </div>
                    <div className="hover:scale-105 transition">
                        <Category category={categories.category1} />
                    </div>
                    <div className="hover:scale-105 transition">
                        <Category category={categories.category2}/>
                    </div>
                    <div className="hover:scale-105 transition">
                        <Category category={categories.category3} />
                    </div>
                    <div className="hover:scale-105 transition">
                        <Category category={categories.category4} />
                    </div>
                    <div className="hover:scale-105 transition">
                        <Category category={categories.category5} />
                    </div>
                    <div className="hover:scale-105 transition">
                        <Category category={categories.category6} />
                    </div>
                    <div className="hover:scale-105 transition">
                        <Category category={categories.category7} />
                    </div>
                    <div className="hover:scale-105 transition">
                        <Category category={categories.category8} />
                    </div>
                </div>
            </div>
        </Layout>
    ) 
}

export default HomeScreen