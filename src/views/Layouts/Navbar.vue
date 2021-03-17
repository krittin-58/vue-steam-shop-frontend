<template>
    <vk-navbar transparent>
    <vk-navbar-nav>
        <vk-navbar-nav-item href="/" title="Home" active></vk-navbar-nav-item>
        <vk-navbar-nav-item href="/products" title="Products"></vk-navbar-nav-item>
        <vk-navbar-nav-item href="/checkout" title="Checkout"></vk-navbar-nav-item>
        <vk-navbar-nav-item href="/about" title="About"></vk-navbar-nav-item>
    </vk-navbar-nav>
    <vk-navbar-nav slot="right">
        <vk-navbar-item>
            <form action="javascript:void(0)">
                <input class="uk-input uk-form-width-small uk-margin-small-right" type="text" placeholder="Search">
                <vk-button>Button</vk-button>
            </form>
        </vk-navbar-item>
    </vk-navbar-nav>
    </vk-navbar>
</template>