<template>
    <div class="posts">
        <div class="post">
            <h3>Contact</h3>
            <div class="break"></div>
            <div class="contactDiv">
                <div>
                    <h4> Email</h4>
                    <p>You can email us anytime at:
                        contact@example.com

                        We'll strive to respond to your inquiries within 24 hours.</p>
                </div>
                <div>
                    <h4> Phone</h4>
                    <p>Prefer to speak with us directly? Give us a call:
                        (123) 456-7890
                        Monday to Friday, 9 AM - 5 PM</p>
                </div>
                <div>
                    <h4> Address</h4>
                    <p>Visit us at our office:
                        1234 Main Street
                        Suite 567
                        Anytown, ST 12345
                        Country</p>
                </div>
            </div>
            <div class="contactDiv">
                <div>
                    <h4> Social Media</h4>
                    <p>Stay connected and follow us on social media:

                        Facebook
                        Twitter
                        Instagram
                        LinkedIn</p>
                </div>
                <div>
                    <h4> Business Hours</h4>
                    <p>Our team is available to assist you during the following hours:

                        Monday - Friday: 9:00 AM - 6:00 PM
                        Saturday: 10:00 AM - 4:00 PM
                        Sunday: Closed</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact'
}
</script>

<style scoped>
.post {
    align-items: center;
}

.contactDiv {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 20px;
}

.break {
    margin: 5px;
    height: 1px;
    width: 90%;
    background-color: #1e293b;
}
</style>