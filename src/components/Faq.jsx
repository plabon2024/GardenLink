import React from "react";

const Faq = () => {
  return (
    <div>
      <section className="space-y-5 container mx-auto">
        <h1 className="text-4xl font-bold text-center">
          Frequently Asked <span className="text-primary">Questions</span>
        </h1>

        <div className="my-10">
          <div className="flex flex-wrap justify-center lg:justify-between">
            <img
              className="zoomInOut"
              src="/public/images/faq.png"
              alt=""
            ></img>
            <div className="space-y-5 text-secondary">
              <div
                tabindex="0"
                className="collapse collapse-open collapse-arrow border-secondary  border"
              >
                <div className="collapse-title text-xl font-medium">
                  Do I need experience to join the gardening community?
                </div>
                <div className="collapse-content">
                  <p>
                    Not at all! Our community welcomes everyone—from beginners
                    to seasoned gardeners. We’re here to learn and grow
                    together.
                  </p>
                </div>
              </div>

              <div
                tabindex="0"
                className="collapse collapse-arrow border-secondary border"
              >
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium">
                  Are there any local gardening events or meetups?
                </div>
                <div className="collapse-content">
                  <p>
                    Yes! We organize regular workshops, plant swaps, and
                    community garden days. Keep an eye on our events page for
                    updates.
                  </p>
                </div>
              </div>

              <div
                tabindex="0"
                className="collapse collapse-arrow border-secondary border"
              >
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium">
                  Can I ask for gardening advice or support?
                </div>
                <div className="collapse-content">
                  <p>
                    Absolutely! Our forums and chat groups are full of friendly
                    members ready to help with tips, troubleshooting, and
                    inspiration.
                  </p>
                </div>
              </div>

              <div
                tabindex="0"
                className="collapse collapse-arrow border-secondary border"
              >
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-medium">
                  Is there a place to share my garden progress?
                </div>
                <div className="collapse-content">
                  <p>
                    Yes! You can share photos, updates, and stories on our
                    community feed. We love celebrating each other’s
                    growth—literally!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
