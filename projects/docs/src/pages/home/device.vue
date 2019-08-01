<template>
    <div class="device">
        <div class="marvel-device iphone8 silver">
            <div class="top-bar"></div>
            <div class="sleep"></div>
            <div class="volume"></div>
            <div class="camera"></div>
            <div class="sensor"></div>
            <div class="speaker"></div>
            <div class="screen">
                <!-- Content goes here -->
                <slot />
            </div>
            <div class="home"></div>
            <div class="bottom-bar"></div>
        </div>

    </div>
</template>
<script>
    export default {
        name: 'device'
    }
</script>

<style lang="scss">
@import '../../libs/css/devices.min.scss';

.device {
    position: relative;
    height: 877Px;
    width: 423Px;
    overflow: hidden;
    & > div {
        transform: scale(1);
        transform-origin: top left;
    }
    .screen {
        overflow-y: scroll;
    }
}
</style>
