"""
Safety check test suite for Meateka AI content moderation.
Run with: python tests/test_safety_check.py  (from the ai/ folder)
"""

from shared.safety_check import is_content_safe


TEST_CASES = [
    {
        "name": "Clean skincare tip",
        "text": "Here are 3 easy skincare tips for beginners. Always remember to wear sunscreen!",
        "expected_safe": True,
        "category": "Safe",
    },
    {
        "name": "Travel recommendation",
        "text": "5 must-visit temples in Siem Reap for first-time travelers. Save this for your trip!",
        "expected_safe": True,
        "category": "Safe",
    },
    {
        "name": "Fitness motivation",
        "text": "Consistency beats intensity. Show up even on the hard days.",
        "expected_safe": True,
        "category": "Safe",
    },
    {
        "name": "Tech product review",
        "text": "I tested this budget phone for 30 days. Here's what I liked and didn't like.",
        "expected_safe": True,
        "category": "Safe",
    },
    {
        "name": "Exaggerated weight loss claim",
        "text": "This product will make you lose 10kg in 3 days with no exercise! Guaranteed results or your money back!",
        "expected_safe": False,
        "category": "Borderline",
    },
    {
        "name": "False medical claim",
        "text": "This herbal supplement cures cancer, diabetes, and heart disease. Doctors don't want you to know this!",
        "expected_safe": False,
        "category": "Borderline",
    },
    {
        "name": "Aggressive off-brand tone",
        "text": "Buy now or you're a complete idiot. Everyone who doesn't use this product is a loser.",
        "expected_safe": False,
        "category": "Borderline",
    },
    {
        "name": "Misleading before/after claim",
        "text": "This cream removed all my wrinkles in just 24 hours. 100% guaranteed to work for everyone!",
        "expected_safe": False,
        "category": "Borderline",
    },
    {
        "name": "Empty string",
        "text": "",
        "expected_safe": True,
        "category": "Edge case",
    },
    {
        "name": "Very long text",
        "text": "This is a great product. " * 200,
        "expected_safe": True,
        "category": "Edge case",
    },
    {
        "name": "Khmer text",
        "text": "នេះគឺជាគន្លឹះថ្នាំប្រឆាំងស្នាមខ្មៅសម្រាប់អ្នកចាប់ផ្តើម។ កុំភ្លេចពាក់ការពារពីព្រះអាទិត្យណាស់!",
        "expected_safe": True,
        "category": "Edge case",
    },
]


def run_tests():
    print("=" * 80)
    print("SAFETY CHECK TEST RESULTS")
    print("=" * 80)
    print(f"{'Test Name':<35} {'Category':<12} {'Expected':<10} {'Got':<10} {'Status'}")
    print("-" * 80)

    passed = 0
    failed = 0

    for tc in TEST_CASES:
        result = is_content_safe(tc["text"])
        actual_safe = result.get("safe", False)
        expected = tc["expected_safe"]

        status = "PASS" if actual_safe == expected else "FAIL"
        if status == "PASS":
            passed += 1
        else:
            failed += 1

        print(f"{tc['name']:<35} {tc['category']:<12} {'safe' if expected else 'unsafe':<10} {'safe' if actual_safe else 'unsafe':<10} {status}")

        if status == "FAIL":
            print(f"  -> Reason: {result.get('reason', 'N/A')}")

    print("-" * 80)
    print(f"Results: {passed} passed, {failed} failed out of {len(TEST_CASES)} tests")
    print("=" * 80)

    if failed > 0:
        print("\nFAILED TESTS:")
        for tc in TEST_CASES:
            result = is_content_safe(tc["text"])
            if result.get("safe", False) != tc["expected_safe"]:
                print(f"  - {tc['name']}: expected {'safe' if tc['expected_safe'] else 'unsafe'}, got {'safe' if result.get('safe') else 'unsafe'}")
                print(f"    Reason: {result.get('reason', 'N/A')}")


if __name__ == "__main__":
    run_tests()
