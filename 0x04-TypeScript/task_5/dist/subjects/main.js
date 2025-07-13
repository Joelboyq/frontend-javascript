"use strict";
// Brand types for nominal typing
function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        __brand: 'MajorCredits'
    };
}
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        __brand: 'MinorCredits'
    };
}
// Example usage (optional for testing)
var major1 = { credits: 3, __brand: 'MajorCredits' };
var major2 = { credits: 4, __brand: 'MajorCredits' };
var totalMajor = sumMajorCredits(major1, major2);
var minor1 = { credits: 1, __brand: 'MinorCredits' };
var minor2 = { credits: 2, __brand: 'MinorCredits' };
var totalMinor = sumMinorCredits(minor1, minor2);
console.log('Total major credits:', totalMajor.credits);
console.log('Total minor credits:', totalMinor.credits);
