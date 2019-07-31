<template>
    <div class="fast-skeleton-loading">
        <slot></slot>
        <div class="skeleton-loading-animation"></div>
    </div>
</template>

<style lang="scss">
    .fast-skeleton-loading {
        position: relative;

        @keyframes loading {
            from {
                background-position-x: -200px;
            }
            to {
                background-position-x: calc(200px + 100%);
            }
        }

        .skeleton-loading-animation {
            position: absolute;
            top: 0;
            z-index: auto;
            width: 100%;
            height: 100%;
            background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 80%) no-repeat;
            background-size: 30% 100%;
            animation: loading 0.9s ease-in-out 0s infinite;
        }
    }

</style>