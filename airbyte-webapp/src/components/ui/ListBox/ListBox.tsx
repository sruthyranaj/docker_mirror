import { Listbox } from "@headlessui/react";
import classNames from "classnames";
import React from "react";

import styles from "./ListBox.module.scss";

export interface ListBoxControlButtonProps<T> {
  selectedOption: Option<T>;
}

const DefaultControlButton = <T,>({ selectedOption }: ListBoxControlButtonProps<T>) => {
  return <>{selectedOption.label}</>;
};

export interface Option<T> {
  label: string;
  value: T;
}

export interface Footer<T> {
  label: string;
  value: T;
  link: string;
}

interface ListBoxProps<T> {
  className?: string;
  options: Array<Option<T>>;
  footer?: Footer<T>;
  selectedValue: T;
  onSelect: (selectedValue: T) => void;
  buttonClassName?: string;
  controlButton?: React.ComponentType<ListBoxControlButtonProps<T>>;
}

export const ListBox = <T,>({
  className,
  options,
  footer,
  selectedValue,
  onSelect,
  buttonClassName,
  controlButton: ControlButton = DefaultControlButton,
}: ListBoxProps<T>) => {
  const selectedOption = options.find((option) => option.value === selectedValue) ?? {
    label: String(selectedValue),
    value: selectedValue,
  };

  return (
    <div className={className}>
      <Listbox value={selectedValue} onChange={onSelect}>
        <Listbox.Button className={classNames(buttonClassName, styles.button)}>
          <ControlButton selectedOption={selectedOption} />
        </Listbox.Button>
        {/* wrap in div to make `position: absolute` on Listbox.Options result in correct vertical positioning */}
        <div className={styles.optionsContainer}>
          <Listbox.Options className={classNames(styles.optionsMenu)}>
            {options.map(({ label, value }) => (
              <Listbox.Option key={label} value={value} className={styles.option}>
                {({ active, selected }) => (
                  <div
                    className={classNames(styles.optionValue, { [styles.active]: active, [styles.selected]: selected })}
                  >
                    {label}
                  </div>
                )}
              </Listbox.Option>
            ))}
            {footer ? (
              <Listbox.Option key={footer.label} value={footer.value} className={styles.footer}>
                {footer.label}
              </Listbox.Option>
            ) : null}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};
