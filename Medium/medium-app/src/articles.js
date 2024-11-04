const articles = [
  {
    id: Date.now(),
    author: {
      name: "Lidya",
      avatar:
        "https://s3-alpha-sig.figma.com/img/d972/9da4/074854beea255bab131d15225748e414?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NO4eq5AvTfdWe--n5KgXDpR-Ez0ICBZy8GHnqtQo2gSag7Mam7DIw43YiMyBm6~JThvve8LF-JaMEIrEHp0AxYxRuG78kEHTUgBrJZ-vzjf1S~gtMObogI67HASgZ-NGuHN0xNEOE7RVKhFcYYwjjGAbFQNnOL7F-2uZMqvZAO98q39gbVn0FgKl5SOsPEY-hKCRtNNIQ1W--7UIKS7Edm~LMJKZmpAYIMUne9wQlZAG5jgn9TPTvvLuMOj3pzU83B41FCy5EVoBCSqxRfE-aOGmO4w~7aTJrB~gopzv9DY~qWvGnM~vKBNwU8ZjlWE2t~~Z9i8B1rfFCqQSNDvMnQ__",
    },
    topic: "7 Practical CSS Tips",
    text: "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.",
    tags: ["Java Script"],
    image:
      "https://s3-alpha-sig.figma.com/img/1415/c5c3/b49a89a84a0508f973196d13148a1a99?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DYHTDiLSeZcWpgM0saG7K9pkfRhiG8qRzxAeYwlJ57CIl-CJuHL~ArJQxjc0l5PRoSs1UqZYdhkdxIIPHwUYueyvjHLQrmTyhZOP9E8Bl6oJ6JVmRKMkiHL1w7b9JeQAPnCK~NEZOp0cJ4rCeGO4Li5uVl~uyiTCMOxFO-qlnnSHmhbi2Ln2PdpDc5LVwcCVqMrE64N1CoKSpIyXLy7Tb3iUkdxXBZJ3TQ50mIEu6wuIVGc877Fn88co-CWBpFFCgn3CruFhmW31vx9OQ8IIL5PJNL1bSnOC5x8MObOYNUchgUKkTC2U486aLXYsi60qZZe~VdlQndH5IUWz-m0YZw__",
  },
  {
    id: Date.now() + 1,
    author: {
      name: "Lidya",
      avatar:
        "https://s3-alpha-sig.figma.com/img/d972/9da4/074854beea255bab131d15225748e414?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NO4eq5AvTfdWe--n5KgXDpR-Ez0ICBZy8GHnqtQo2gSag7Mam7DIw43YiMyBm6~JThvve8LF-JaMEIrEHp0AxYxRuG78kEHTUgBrJZ-vzjf1S~gtMObogI67HASgZ-NGuHN0xNEOE7RVKhFcYYwjjGAbFQNnOL7F-2uZMqvZAO98q39gbVn0FgKl5SOsPEY-hKCRtNNIQ1W--7UIKS7Edm~LMJKZmpAYIMUne9wQlZAG5jgn9TPTvvLuMOj3pzU83B41FCy5EVoBCSqxRfE-aOGmO4w~7aTJrB~gopzv9DY~qWvGnM~vKBNwU8ZjlWE2t~~Z9i8B1rfFCqQSNDvMnQ__",
    },
    topic: "7 Practical CSS Tips",
    text: "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.",
    tags: ["Java Script"],
    image:
      "https://s3-alpha-sig.figma.com/img/1415/c5c3/b49a89a84a0508f973196d13148a1a99?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DYHTDiLSeZcWpgM0saG7K9pkfRhiG8qRzxAeYwlJ57CIl-CJuHL~ArJQxjc0l5PRoSs1UqZYdhkdxIIPHwUYueyvjHLQrmTyhZOP9E8Bl6oJ6JVmRKMkiHL1w7b9JeQAPnCK~NEZOp0cJ4rCeGO4Li5uVl~uyiTCMOxFO-qlnnSHmhbi2Ln2PdpDc5LVwcCVqMrE64N1CoKSpIyXLy7Tb3iUkdxXBZJ3TQ50mIEu6wuIVGc877Fn88co-CWBpFFCgn3CruFhmW31vx9OQ8IIL5PJNL1bSnOC5x8MObOYNUchgUKkTC2U486aLXYsi60qZZe~VdlQndH5IUWz-m0YZw__",
  },
  {
    id: Date.now() + 2,
    author: {
      name: "Lidya",
      avatar:
        "https://s3-alpha-sig.figma.com/img/d972/9da4/074854beea255bab131d15225748e414?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NO4eq5AvTfdWe--n5KgXDpR-Ez0ICBZy8GHnqtQo2gSag7Mam7DIw43YiMyBm6~JThvve8LF-JaMEIrEHp0AxYxRuG78kEHTUgBrJZ-vzjf1S~gtMObogI67HASgZ-NGuHN0xNEOE7RVKhFcYYwjjGAbFQNnOL7F-2uZMqvZAO98q39gbVn0FgKl5SOsPEY-hKCRtNNIQ1W--7UIKS7Edm~LMJKZmpAYIMUne9wQlZAG5jgn9TPTvvLuMOj3pzU83B41FCy5EVoBCSqxRfE-aOGmO4w~7aTJrB~gopzv9DY~qWvGnM~vKBNwU8ZjlWE2t~~Z9i8B1rfFCqQSNDvMnQ__",
    },
    topic: "7 Practical CSS Tips",
    text: "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.",
    tags: ["Java Script"],
    image:
      "https://s3-alpha-sig.figma.com/img/1415/c5c3/b49a89a84a0508f973196d13148a1a99?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DYHTDiLSeZcWpgM0saG7K9pkfRhiG8qRzxAeYwlJ57CIl-CJuHL~ArJQxjc0l5PRoSs1UqZYdhkdxIIPHwUYueyvjHLQrmTyhZOP9E8Bl6oJ6JVmRKMkiHL1w7b9JeQAPnCK~NEZOp0cJ4rCeGO4Li5uVl~uyiTCMOxFO-qlnnSHmhbi2Ln2PdpDc5LVwcCVqMrE64N1CoKSpIyXLy7Tb3iUkdxXBZJ3TQ50mIEu6wuIVGc877Fn88co-CWBpFFCgn3CruFhmW31vx9OQ8IIL5PJNL1bSnOC5x8MObOYNUchgUKkTC2U486aLXYsi60qZZe~VdlQndH5IUWz-m0YZw__",
  },
];

export { articles };
