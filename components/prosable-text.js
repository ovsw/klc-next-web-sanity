import React, { useMemo } from "react";
import { PortableText } from "../lib/sanity";

import { blockSerializers } from "components/block-serializers";

/**
 * Use Tailwind CSS's `prose` classes with Portable Text markup (blocks)
 * Without inheriting styles for custom components (types)
 */
export default function ProseableText({ value = [] }) {
  if (value.length == 0) return null;
  // Group together standard `_type === "block"`  blocks
  // eg <p>, <li>, etc – and separate out everyone else
  const valueGroups = useMemo(() =>
    value.reduce(
      (acc, item) => {
        const lastIdx = acc.length - 1;

        if (
          // We don't have items in this group yet
          acc[lastIdx].length === 0 ||
          // The last group has the same `type`
          acc[lastIdx][0]._type === item._type
        ) {
          acc[lastIdx].push(item);
        } else {
          // Time to create a new group, because the `type` is different compared to last group
          acc.push([item]);
        }

        return acc;
      },
      [[]]
    )
  );

  if (!valueGroups?.length) return null;

  return valueGroups.map((group) =>
    group[0]._type === "block" ? (
      <div key={group[0]._key} className="tw-prose tw-prose-xl tw-max-w-full">
        <PortableText value={group} components={blockSerializers} />
      </div>
    ) : (
      <PortableText
        key={group[0]._key}
        value={group}
        components={blockSerializers}
      />
    )
  );
}
