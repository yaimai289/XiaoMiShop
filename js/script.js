const contentBoxCollection = document.getElementsByClassName("content-box");

for (let contentBox of contentBoxCollection) {
    const titleBox = contentBox.getElementsByClassName("title-box")[0];
    const itemBoxCollection = contentBox.getElementsByClassName("item-box");

    if (itemBoxCollection.length > 1) {
        const liCollection = titleBox.getElementsByTagName("li");

        for (let li of liCollection) {
            li.addEventListener("mouseover", function() {
                const lis = li.parentNode.children;
                for (let liElse of lis) {
                    liElse.style.color = "#424242";
                    liElse.style.borderBottom = "2px solid rgba(0, 0, 0, 0)";
                }
                li.style.color = "#ff6700";
                li.style.borderBottom = "2px solid #ff6700";

                const itemBoxes = li.closest(".content-box").getElementsByClassName("item-box");
                for (let itemBoxElse of itemBoxes) {
                    itemBoxElse.style.height = "0px";
                }

                const itemBox = li.closest(".content-box").getElementsByClassName(`item-box ${li.className}`)[0];
                if (itemBox) {
                    itemBox.style.height = "614px";
                }
            });
        }
    }
}
