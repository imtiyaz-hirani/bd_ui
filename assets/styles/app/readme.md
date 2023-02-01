Customize Theming:-
For creating new theme just add new file within within styles/app/core/serrala-themes
and add name within variable of themesArr within app/core/constant file

// Spacers defined within styles/app/bootstrap/utilities/_spacing.scss
// Defined below classes we can use for spacing
https://getbootstrap.com/docs/4.0/utilities/spacing/
// all bootstrap classes defined using spacers like, we can use below mentioned spacing which are multiple in 6
// throughout application spacing should be defined in multiple of 6, Already defined spacing upto 60px
p => p-0, pl-0, pr-0, pt-0, pb-0 (padding, padding-left, padding-right, padding-top, padding-bottom)
m => m-0, ml-0, mr-0, mt-0, mb-0 (margin, margin-left, margin-right, margin-top, margin-bottom)
0: 0
1: 6px  (p-1, m-1, ...)
2: 12px  (p-2, m-2, ...)
3: 18px  (p-3, m-3, ...)
4: 24px  (p-4, m-4, ...)
5: 30px  (p-5, m-5, ...)
6: 36px  (p-6, m-6, ...)
7: 42px  (p-7, m-7, ...)
8: 48px  (p-8, m-8, ...)
9: 54px  (p-9, m-9, ...)
10: 60px  (p-10, m-10, ...)

All Bootstrap grid Classes are available for responsive design with flex layout classes
https://getbootstrap.com/docs/4.0/utilities/flex/

All the Bootstrap 4 Floating classes available within theme
https://getbootstrap.com/docs/4.0/utilities/float/

All the Bootstrap 4 Vertical align classes available
https://getbootstrap.com/docs/4.0/utilities/vertical-align/

Headers are predefined
Heading 1 => h1, .h1 => 34px
Heading 2 => h2, .h2 => 28px
Heading 3 => h3, .h3 => 24px        Default bold text
Heading 4 => h4, .h4 => 21px        Default bold text
Heading 5 => h5, .h5 => 18px
Heading 6 => h6, .h6 => 16px

For bold header text can use predefined classes like
h1-b, h2-b, h3-b, h4-b, h5-b, h6-b


Button Classes 
All Syncfusion button component should be used for the buttons

Custom button classes=>

.se-icon-btn => For icons within button
.small => for small button within icons
