<template>
    <div class="col-md-4 mb-5">
        <div class="card">
            <img class="card-img-top" :src="image" :alt="title" height="250px"/>
            <div class="card-body">
                <h5 class="card-title">{{title}}</h5>
                <span class="badge badge-pill badge-light p-2">{{price}} $</span>
                <p class="card-text">
                    {{body}}
                </p>
                <button type="button" class="btn btn-outline-info btn-sm" @click="addToCart()">add to cart</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        "id",
        "title",
        "body",
        "image",
        "price"
    ],
    data() {
        return {
            item: {
                productId: this.id,
                productTitle: this.title,
                productBody: this.body,
                productImage: this.image,
                productprice: this.price,
                productQuantity: 1,
            },
        };
    },
    methods: {
        addToCart() {
            this.$store.commit("addToCart", this.item);
            this.$notify({
                group: 'foo',
                duration: 2000,
                type: 'success',
                text: 'product added to cart successfully!'
            });
        },
    },
};
</script>

<style lang="scss" scoped>

</style>