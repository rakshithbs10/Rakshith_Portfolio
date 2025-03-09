import {DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {FC, memo} from 'react';

import {contact, SectionId} from '../../../data/data';
import {ContactType, ContactValue} from '../../../data/dataDef';
import FacebookIcon from '../../Icon/FacebookIcon';
import GithubIcon from '../../Icon/GithubIcon';
import InstagramIcon from '../../Icon/InstagramIcon';
import LinkedInIcon from '../../Icon/LinkedInIcon';
import TwitterIcon from '../../Icon/TwitterIcon';
import Section from '../../Layout/Section';

const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: {Icon: EnvelopeIcon, srLabel: 'Email'},
  [ContactType.Phone]: {Icon: DevicePhoneMobileIcon, srLabel: 'Phone'},
  [ContactType.Location]: {Icon: MapPinIcon, srLabel: 'Location'},
  [ContactType.Github]: {Icon: GithubIcon, srLabel: 'Github'},
  [ContactType.LinkedIn]: {Icon: LinkedInIcon, srLabel: 'LinkedIn'},
  [ContactType.Facebook]: {Icon: FacebookIcon, srLabel: 'Facebook'},
  [ContactType.Twitter]: {Icon: TwitterIcon, srLabel: 'Twitter'},
  [ContactType.Instagram]: {Icon: InstagramIcon, srLabel: 'Instagram'},
};

const Contact: FC = memo(() => {
  const {headerText, description, items} = contact;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Contact}>
      {/* 
        Outer container: centers everything horizontally and vertically, 
        plus adds some padding for breathing room.
      */}
      <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
        {/* Icon + Header */}
        <div className="flex flex-col items-center gap-y-3">
          <EnvelopeIcon className="h-16 w-16 text-white" />
          <h2 className="text-2xl font-bold text-white">{headerText}</h2>
        </div>
        
        {/* Description text */}
        <p className="mt-4 max-w-xl text-neutral-300">
          {description}
        </p>
        
        {/* Contact items list */}
        <dl className="mt-6 flex flex-col gap-y-4">
          {items.map(({type, text, href}) => {
            const {Icon, srLabel} = ContactValueMap[type];
            return (
              <div key={srLabel} className="flex items-center justify-center">
                <dt className="sr-only">{srLabel}</dt>
                <dd>
                  <a
                    className={classNames(
                      'inline-flex items-center rounded-md p-2 text-neutral-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500',
                      {'hover:text-white': href},
                    )}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      aria-hidden="true"
                      className="h-5 w-5 text-neutral-100 sm:h-6 sm:w-6"
                    />
                    <span className="ml-2 text-sm sm:text-base">{text}</span>
                  </a>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;